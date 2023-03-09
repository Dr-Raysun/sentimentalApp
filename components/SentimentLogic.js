import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../utils/firebase";

const SentimentLogic = ({ productTitle }) => {
  const { data: session } = useSession(); //data of the user log in
  const [text, setText] = useState("");
  const [newfeedback, setNewFeedback] = useState([]);
  // console.log(`showing text ${text}`);
  //console.log(`title of the product ${productTitle}`);
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert("i am inside summit ");

    // Load the pre-trained model
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();

    // Analyze the sentiment of the text
    var result = sentiment.analyze(text);
    console.log(result);

    // sending the data to firestore database
    if (session) {
      alert("session is available");
      // Add a new document with a generated id.
      const userCommentRef = collection(db, "userComment");
      const docRef = addDoc(userCommentRef, {
        userText: text,
        name: session.user.name,
        productName: productTitle,
        email: session.user.email,
        results: { score: result.score, comparative: result.comparative },
        createdAt: Timestamp.now().toDate(),
      });
    }
    console.log("resultwords");
    console.log(result.words);
  };

  useEffect(() => {
    // reading the infomation from the database
    //geting the data from the database
    if (productTitle) {
      const userDataCommentRef = collection(db, "userComment");
      const q = query(userDataCommentRef, orderBy("createdAt", "asc"));
      onSnapshot(q, (snapshot) => {
        const newfeed = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("inside the snapshot");
        console.log(newfeed);
        setNewFeedback(newfeed);
      });
    }
  }, []);

  //style for the table
  const style = {
    rowStyle: `border border-gray-400 px-4 py-2 text-gray-200`,
    rowHeader: `border border-gray-400 px-4 py-2`,
    mouseOnRow: `hover:bg-gray-100 text-black`,
    tableStyle: `w-full border-collapse border border-gray-400`,
  };

  return (
    <div className="  py-4 border-2 border-blue-900 bg-[#334155] text-gray-200">
      {/* new table  */}
      <div className="">
        <table className={style.tableStyle}>
          <thead>
            <tr className="bg-gray-700">
              <th className={style.rowHeader}>User Text</th>
              <th className={style.rowHeader}> Name</th>
              <th className={style.rowHeader}>ProductName</th>
              <th className={style.rowHeader}>Email</th>
              <th className={style.rowHeader}>Score</th>
              <th className={style.rowHeader}>Comparative</th>
              <th className={style.rowHeader}>Created At</th>
              <th className={style.rowHeader}>sentiment</th>
            </tr>
          </thead>
          <tbody>
            {newfeedback
              .filter((row) => row.productName === productTitle)
              .map((row) => (
                <tr className={style.mouseOnRow} key={row.id}>
                  <td className={style.rowStyle}>{row.userText}</td>
                  <td className={style.rowStyle}>{row.name}</td>
                  <td className={style.rowStyle}>{row.productName}</td>
                  <td className={style.rowStyle}>{row.email}</td>
                  <td className={style.rowStyle}>{row.results.score}</td>
                  <td className={style.rowStyle}>{row.results.comparative}</td>
                  <td className={style.rowStyle}>
                    {new Date(row.createdAt.seconds * 1000).toLocaleString()}
                  </td>
                  <td className={style.rowStyle}>
                    {row.results.score == 0
                      ? "neutral"
                      : row.results.score > 0
                      ? "positive"
                      : "negative"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block mt-3 px-4  font-bold mb-2">
          Enter text:
          <textarea
            className=" mt-3 block text-black border rounded-md  p-2"
            value={text}
            cols="50"
            rows="5"
            onChange={handleInputChange}
          />
        </label>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold mb-4 mx-4 py-2 px-4 rounded-full"
          type="submit"
        >
          summit text
        </button>
      </form>
    </div>
  );
};

export default SentimentLogic;
