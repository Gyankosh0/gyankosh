import React, { useEffect } from "react";
import Classes from "../../assets/data/class.json";
import Lang from "../../assets/data/language.json";
import Sub from "../../assets/data/subject.json";
import Chapt from "../../assets/data/chapter.json";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Question from "../../assets/data/question.json";
import { useParams } from "react-router";
import styles from "./question.module.css";
import bgImg from "../../assets/bgImg.jpeg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useURL from "../../components/useURL";
import jsPDF from 'jspdf';
function Question_paper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseURL = useURL();
  let { id } = useParams();
  const key=  { id };
  console.log("key",key.id);
  //console.log(Question[parseInt(key.id) - 1].question);
  let p = 1;
  let k = 1;

  const [rev, setRev] = useState(false);
  const [cls, setCls] = useState(false);
  const [ques, setQues] = useState(false);
  const [gen,setGen]=useState(false);
  const [cl,setcl]=useState("");
  const [level,setlevel]=useState("");
  const [sub,setSub]=useState("");
  const [chap,setChap]=useState("");
  const [obj,setObj]=useState([]);
  const review = (e) => {
    e.preventDefault();
    // setRev(true);
    hand();
    
  };
  const clearr = (e) => {
    e.preventDefault();
    setObj([]);
    setRev(false);
  };
  const handleChange = (e) => {
    setcl(e.target.value);
  };
  const handleChangeLevel = (e) => {
    setlevel(e.target.value);
  };
  const handleChangeSub = (e) => {
    setSub(e.target.value);
  };
  const handleChangeChap = (e) => {
    setChap(e.target.value);
  };
  useEffect(() => {
    console.log(rev);
  }, [key]);


  const hand=async()=>{
    try {
      const res = await axios.post(
        `${baseURL}/api/questions`,
        {
          "className":cl,
          "level":level,
          "subject":sub,
          "chapter":chap
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      var l=res.data.data;
      console.log(res.data.data[0]);
      if (res.data.success) {
        // setObj(res.data.data[0]);
        l.map((ob)=>{
          obj.push(ob);
        })
        // console.log(res.data.data[0].question);
        console.log(obj[0].question);
        obj.map((ob)=>{
          console.log("print",ob);
        })
        setRev(true);
      } 
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  const pdf=()=>{
    var doc = new jsPDF();
    var line=25,lineHeight=5;

    obj.forEach(function(employee, i){
    var q=doc.splitTextToSize(employee.question,150);
        doc.text(10, 10 + (i * 10), 
            "Question: " );
          
            for (var i = 0, length = q.length; i < length; i++) {
              // loop thru each line and increase
              doc.text(q[i], 20, line)
              line = lineHeight + line
            } 
            
            var p=doc.splitTextToSize(employee.solution,150);
            doc.text(10, 20+ (i * 10), 
                "solution: " );
              line=line +10;
                for (var i = 0, length = p.length; i < length; i++) {
                  // loop thru each line and increase
                  doc.text(p[i], 20, line)
                  line = lineHeight + line
                } 
            // doc.text(10, 30 + (i * 10), 
            //  "Solution: " + employee.solution);
    });
    doc.save('Test.pdf');
}

  // const onSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(e);
    // review(e);
    // setRev(true);
    // const data={
    //   "className":cl,
    //   "level":level,
    //   "subject":sub,
    //   "chapter":chap
    // };
    
    // console.log(JSON.stringify(data));
   
    // console.log(data.className, Question[0].className);
    // var fav=[];
    // for(var i=0;i<Question.length;i++){
    //   if(data.className == Question[i].className && data.level == Question[i].level){
    //     var js={"question":Question[i].question,"solution":Question[i].solution};
    //     fav.push(js);
    //     setObj(fav);
    //   }
    // }
    // console.log(fav);

    // const arr1=Question.filter(q=>q.className==data.className && q.level==data.level &&q.subject==data.subject && q.chapter==data.chapter);
    // setObj(arr1);
    /***fetch******/  
  // }
  useEffect(()=>{
    console.log("h");
  },[obj,rev]);

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={styles.quest}>
        <div className={styles.box1}>
          <div className={styles.headdiv}>
            <div className={styles.head}>
              <h1>Question Paper</h1>
            </div>
          </div>
          <div className={styles.box2}>
            <div>
              <form id="formEle" className={styles.fm} >
                <div className={styles.fmdiv1}>
                  <div className={styles.fmdiv2}>
                    <label for="class">Class </label>
                    <select className={styles.class} onChange={handleChange}>
                      <option value=""> Click here to see... </option>
                      {!Classes ? (
                        <p>Data is fetching....</p>
                      ) : (
                        Classes.map((cls) => (
                          <option name="class" value={cls.class}>{cls.class}</option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className={styles.fmdiv2}>
                    <label for="Language">Language </label>
                    <select className={styles.Language} name="Language">
                      <option value=""> Click here to see... </option>
                      {!Lang ? (
                        <p>Data is fetching....</p>
                      ) : (
                        Lang.map((lng) => (
                          <option value={lng.langauge} name="">{lng.language}</option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className={styles.fmdiv2}>
                    <label for="Subject">Subject </label>
                    <select className={styles.Subject} name="Subject" onChange={handleChangeSub}>
                      <option value=""> Click here to see... </option>
                      {!Sub ? (
                        <p>Data is fetching....</p>
                      ) : (
                        Sub.map((sb) => (
                          <option name="subject" value={sb.subject}>{sb.subject}</option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className={styles.fmdiv2}>
                    <label for="Question">Question Level </label>
                    <select className={styles.Question} name="Question" onChange={handleChangeLevel}>
                      <option name="level" value=""> Click here to see... </option>
                      <option name="level" value="Easy"> Easy </option>
                      <option name="level" value="Medium"> Medium </option>
                      <option name="level" value="Hard"> Hard </option>
                    </select>
                  </div>

                  <div className={styles.fmdiv2}>
                    <input
                      type="checkbox"
                      className={styles.auto1}
                      name="auto"
                      value="auto"
                    />
                    <label for="autogen" className={styles.auto}>
                      {" "}
                      Auto Generate{" "}
                    </label>
                  </div>
                </div>

                <div className={styles.fmdiv1}>
                  <div className={styles.fmdiv2}>
                    <label for="Chapter">Chapter </label>
                    <select
                      className={styles.Chapter}
                      name="Chapter"
                      // onClick={() => setChap(!chap)}
                      onChange={handleChangeChap}
                    >
                      <option value="">Click here to see... </option>
                      {!Chapt ? (
                        <p>Data is fetching....</p>
                      ) : (
                        Chapt.map((cpt) => (
                          <option value={cpt.chapter}>{cpt.chapter}</option>
                        ))
                      )}
                    </select>
                  </div>

                  <div className={styles.fmdiv2}>
                    <label for="question_type" className={styles.qt}>
                      Question Type
                    </label>
                    <select
                      className={styles.question_type}
                      name="question_type"
                    >
                      <option value=""> Click here to see....</option>
                      <option value="Hard"> Hard </option>
                      <option value="Moderate"> Moderate </option>
                      <option value="Easy"> Easy </option>
                    </select>
                  </div>
                  {/* onClick={(e) => review(e)} */}
                  <button className={styles.rvw} onClick={(e) => review(e) } >
                    Review Question
                  </button>

                  <button className={styles.clr} onClick={(e) => clearr(e)}>
                    Clear
                  </button>
                </div>

                <div className={styles.fmdiv2}>
                  <label for="Topic" className={styles.t1}>
                    Topic
                  </label>
                  <select className={styles.Topic} name="Topic">
                    <option value=""> Click here to see... </option>
                    <option value="Physics"> Physics </option>
                    <option value="Chemistry"> Chemistry </option>
                    <option value="Biology"> Biology </option>
                  </select>
                </div>

                <br />
                <div className={styles.fmdiv1}>
                  <div className={styles.fmdiv2}>
                    <label for="selectq" className={styles.sq}>
                      Selected Questions
                    </label>
                    <input
                      type="checkbox"
                      className={styles.selectauto}
                      name="auto"
                      value="selque"
                    />
                  </div>
                  <div className={styles.fmdiv2}>
                    <label for="selecttotal"> Total Available Questions </label>
                    <input
                      type="checkbox"
                      className={styles.autototal}
                      name="auto"
                      value="avail"
                    />
                  </div>
                  <div className={styles.fmdiv2}>
                    <label for="usedquestion"> Used Questions </label>
                    <input
                      type="checkbox"
                      className={styles.useques}
                      name="useq"
                      value="avail"
                    />
                  </div>
                  <div className={styles.fmdiv2}>
                    <label for="Topics" className={styles.t2}>
                      Topic
                    </label>
                    <select className={styles.Topics} name="Topics">
                      <option value=""> Click here to see... </option>
                      <option value="Physics"> Physics </option>
                      <option value="Chemistry"> Chemistry </option>
                      <option value="Biology"> Biology </option>
                    </select>
                  </div>
                </div>
              </form>
              <hr />

              <div className={styles.cont}>
                <div className={styles.wrapper}>
                  <div className={styles.sidebar}>
                    {rev && (
                      <div className={styles.topqp}>
                        <button className={styles.btico}>
                          {" "}
                          <IoIosAddCircleOutline /> New{" "}
                        </button>
                        <button className={styles.btico}>
                          {" "}
                          <MdDelete /> Delete{" "}
                        </button>
                        <button className={styles.btico}>
                          {" "}
                          <BsBookmarks /> Save{" "}
                        </button>
                        <button className={styles.btico}>
                          {" "}
                          <RxCrossCircled /> Exit{" "}
                        </button>
                      </div>
                    )}
                    {rev && (
                      <div className={styles.sec_qp}>
                        <button className={styles.btico}> Add to Paper </button>
                        <button className={styles.btico}> Unmark </button>
                        <p>Select All</p>
                        <input type="checkbox" />
                      </div>
                    )}
                    {rev ? (
                      <div className={styles.qpt}>
                        <div className={styles.qptop}>Questions</div>
                        {(obj.length<1)
                          ? null
                          : obj.map((qu) => (
                            
                              <div className={styles.parent_qnum}>
                                {/* <Link to={`/question_bank/${qu.key}`}> */}
                                <Link to={`/question_bank/${p}`}> 
                                  <div className={styles.num_ques}>
                                    {`Question ${p++}`}
                                  </div>
                                </Link>
                                <input className={styles.inp} type="checkbox" />
                              </div>
                            ))}
                      </div>
                    ):""}
                  </div>
                </div>

                <div className={styles.qpaper}>
                  <div className="">
                    <div className={styles.tq}>Question:</div>
                    <p className={styles.reg}>
                      {rev && key.id
                        ? obj[0].question
                        : "No Result"}
                    </p>
                  </div>
                  <div className="">
                    <div className={styles.ts}> Solution: </div>
                    <p className={styles.reg}>
                      {rev && key.id
                        ? obj[0].solution
                        : "No Result"}
                    </p>
                  </div>
                </div>
                <div className={styles.wrapper1}>
                  <div className={styles.sidebar1}>
                    <button className={styles.btsumm}> Show Summary </button>
                    <button className={styles.btquestpaper} onClick={() => pdf() }>
                      {" "}
                      Generate Question Paper{" "}
                    </button>
                    <button className={styles.btsavepaper}> Save Paper </button>
                    {rev && (
                      <div className={styles.quesbox}>
                        <div className={styles.tqques}> Questions </div>
                        {!obj
                          ? null
                          : obj.map((qu) => (
                              <div className={styles.parent_qnum}>
                                <Link to={`/question_bank/${p}`}>
                                  <div className={styles.num_ques}>
                                    {`Question ${k++}`}
                                  </div>
                                </Link>
                                <input className={styles.inp} type="checkbox" />
                              </div>
                            ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Link className={styles.arrow} to={"/"}><IoArrowBackCircleSharp size={50}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question_paper;



// import React, { useEffect } from "react";
// import Classes from "../../assets/data/class.json";
// import Lang from "../../assets/data/language.json";
// import Sub from "../../assets/data/subject.json";
// import Chapt from "../../assets/data/chapter.json";
// import { useState } from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import { BsBookmarks } from "react-icons/bs";
// import { RxCrossCircled } from "react-icons/rx";
// import { IoArrowBackCircleSharp } from "react-icons/io5";
// import Question from "../../assets/data/question.json";
// import { useParams } from "react-router";
// import styles from "./question.module.css";
// import bgImg from "../../assets/bgImg.jpeg";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import useURL from "../../components/useURL";
// function Question_paper() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const baseURL = useURL();
//   let { id } = useParams();
//   const key=  { id };
//   //console.log(key.id);
//   //console.log(Question[parseInt(key.id) - 1].question);
//   let p = 1;
//   let k = 1;

//   const [rev, setRev] = useState(false);
//   const [cls, setCls] = useState(false);
//   const [ques, setQues] = useState(false);
//   const [gen,setGen]=useState(false);
//   const [cl,setcl]=useState("");
//   const [level,setlevel]=useState("");
//   const [sub,setSub]=useState("");
//   const [chap,setChap]=useState("");
//   const [obj,setObj]=useState([]);
//   const review = (e) => {
//     e.preventDefault();
//     setRev(true);
//   };
//   const clearr = (e) => {
//     e.preventDefault();
//     setRev(false);
//   };
//   const handleChange = (e) => {
//     setcl(e.target.value);
//   };
//   const handleChangeLevel = (e) => {
//     setlevel(e.target.value);
//   };
//   const handleChangeSub = (e) => {
//     setSub(e.target.value);
//   };
//   const handleChangeChap = (e) => {
//     setChap(e.target.value);
//   };
//   useEffect(() => {
//     console.log(rev);
//   }, [key]);

//   const hand=async()=>{
//     try {
//       const res = await axios.post(
//         `${baseURL}/api/questions`,
//         {
//           "className":cl,
//           "level":level,
//           "subject":sub,
//           "chapter":chap
//         },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       var l=res.data.data;
//       console.log(res.data.data[0]);
//       if (res.data.success) {
//         // setObj(res.data.data[0]);
//         l.map((ob)=>{
//           obj.push(ob);
//         })
//         // console.log(res.data.data[0].question);
//         console.log(obj);
//       } 
//     } catch (error) {
//       console.log("Something went wrong");
//       console.log(error);
//     }
//   }

//   const onSubmit=(e)=>{
//     e.preventDefault();
//     console.log(e);
//     setRev(true);
//     // const data={
//     //   "className":cl,
//     //   "level":level,
//     //   "subject":sub,
//     //   "chapter":chap
//     // };
    
//     // console.log(JSON.stringify(data));
//     hand();
//     // console.log(data.className, Question[0].className);
//     // var fav=[];
//     // for(var i=0;i<Question.length;i++){
//     //   if(data.className == Question[i].className && data.level == Question[i].level){
//     //     var js={"question":Question[i].question,"solution":Question[i].solution};
//     //     fav.push(js);
//     //     setObj(fav);
//     //   }
//     // }
//     // console.log(fav);

//     // const arr1=Question.filter(q=>q.className==data.className && q.level==data.level &&q.subject==data.subject && q.chapter==data.chapter);
//     // setObj(arr1);
//     /***fetch******/
    
//   }
//   // useEffect(()=>{
//   //   console.log("h");
//   // },[obj]);
//   return (
//     <div className={styles.main} style={{ backgroundImage: `url(${bgImg})` }}>
//       <div className={styles.quest}>
//         <div className={styles.box1}>
//           <div className={styles.headdiv}>
//             <div className={styles.head}>
//               <h1>Question Paper</h1>
//             </div>
//           </div>
//           <div className={styles.box2}>
//             <div>
//               <form id="formEle" className={styles.fm} onSubmit={onSubmit}>
//                 <div className={styles.fmdiv1}>
//                   <div className={styles.fmdiv2}>
//                     <label for="class">Class </label>
//                     <select className={styles.class} onChange={handleChange}>
//                       <option value=""> Click here to see... </option>
//                       {!Classes ? (
//                         <p>Data is fetching....</p>
//                       ) : (
//                         Classes.map((cls) => (
//                           <option name="class" value={cls.class}>{cls.class}</option>
//                         ))
//                       )}
//                     </select>
//                   </div>

//                   <div className={styles.fmdiv2}>
//                     <label for="Language">Language </label>
//                     <select className={styles.Language} name="Language">
//                       <option value=""> Click here to see... </option>
//                       {!Lang ? (
//                         <p>Data is fetching....</p>
//                       ) : (
//                         Lang.map((lng) => (
//                           <option value={lng.langauge} name="">{lng.language}</option>
//                         ))
//                       )}
//                     </select>
//                   </div>

//                   <div className={styles.fmdiv2}>
//                     <label for="Subject">Subject </label>
//                     <select className={styles.Subject} name="Subject" onChange={handleChangeSub}>
//                       <option value=""> Click here to see... </option>
//                       {!Sub ? (
//                         <p>Data is fetching....</p>
//                       ) : (
//                         Sub.map((sb) => (
//                           <option name="subject" value={sb.subject}>{sb.subject}</option>
//                         ))
//                       )}
//                     </select>
//                   </div>

//                   <div className={styles.fmdiv2}>
//                     <label for="Question">Question Level </label>
//                     <select className={styles.Question} name="Question" onChange={handleChangeLevel}>
//                       <option name="level" value=""> Click here to see... </option>
//                       <option name="level" value="Easy"> Easy </option>
//                       <option name="level" value="Medium"> Medium </option>
//                       <option name="level" value="Hard"> Hard </option>
//                     </select>
//                   </div>

//                   <div className={styles.fmdiv2}>
//                     <input
//                       type="checkbox"
//                       className={styles.auto1}
//                       name="auto"
//                       value="auto"
//                     />
//                     <label for="autogen" className={styles.auto}>
//                       {" "}
//                       Auto Generate{" "}
//                     </label>
//                   </div>
//                 </div>

//                 <div className={styles.fmdiv1}>
//                   <div className={styles.fmdiv2}>
//                     <label for="Chapter">Chapter </label>
//                     <select
//                       className={styles.Chapter}
//                       name="Chapter"
//                       // onClick={() => setChap(!chap)}
//                       onChange={handleChangeChap}
//                     >
//                       <option value="">Click here to see... </option>
//                       {!Chapt ? (
//                         <p>Data is fetching....</p>
//                       ) : (
//                         Chapt.map((cpt) => (
//                           <option value={cpt.chapter}>{cpt.chapter}</option>
//                         ))
//                       )}
//                     </select>
//                   </div>

//                   <div className={styles.fmdiv2}>
//                     <label for="question_type" className={styles.qt}>
//                       Question Type
//                     </label>
//                     <select
//                       className={styles.question_type}
//                       name="question_type"
//                     >
//                       <option value=""> Click here to see....</option>
//                       <option value="Hard"> Hard </option>
//                       <option value="Moderate"> Moderate </option>
//                       <option value="Easy"> Easy </option>
//                     </select>
//                   </div>
//                   {/* onClick={(e) => review(e)} */}
//                   <button className={styles.rvw}  >
//                     Review Question
//                   </button>

//                   <button className={styles.clr} onClick={(e) => clearr(e)}>
//                     Clear
//                   </button>
//                 </div>

//                 <div className={styles.fmdiv2}>
//                   <label for="Topic" className={styles.t1}>
//                     Topic
//                   </label>
//                   <select className={styles.Topic} name="Topic">
//                     <option value=""> Click here to see... </option>
//                     <option value="Physics"> Physics </option>
//                     <option value="Chemistry"> Chemistry </option>
//                     <option value="Biology"> Biology </option>
//                   </select>
//                 </div>

//                 <br />
//                 <div className={styles.fmdiv1}>
//                   <div className={styles.fmdiv2}>
//                     <label for="selectq" className={styles.sq}>
//                       Selected Questions
//                     </label>
//                     <input
//                       type="checkbox"
//                       className={styles.selectauto}
//                       name="auto"
//                       value="selque"
//                     />
//                   </div>
//                   <div className={styles.fmdiv2}>
//                     <label for="selecttotal"> Total Available Questions </label>
//                     <input
//                       type="checkbox"
//                       className={styles.autototal}
//                       name="auto"
//                       value="avail"
//                     />
//                   </div>
//                   <div className={styles.fmdiv2}>
//                     <label for="usedquestion"> Used Questions </label>
//                     <input
//                       type="checkbox"
//                       className={styles.useques}
//                       name="useq"
//                       value="avail"
//                     />
//                   </div>
//                   <div className={styles.fmdiv2}>
//                     <label for="Topics" className={styles.t2}>
//                       Topic
//                     </label>
//                     <select className={styles.Topics} name="Topics">
//                       <option value=""> Click here to see... </option>
//                       <option value="Physics"> Physics </option>
//                       <option value="Chemistry"> Chemistry </option>
//                       <option value="Biology"> Biology </option>
//                     </select>
//                   </div>
//                 </div>
//               </form>
//               <hr />

//               <div className={styles.cont}>
//                 <div className={styles.wrapper}>
//                   <div className={styles.sidebar}>
//                     {rev && (
//                       <div className={styles.topqp}>
//                         <button className={styles.btico}>
//                           {" "}
//                           <IoIosAddCircleOutline /> New{" "}
//                         </button>
//                         <button className={styles.btico}>
//                           {" "}
//                           <MdDelete /> Delete{" "}
//                         </button>
//                         <button className={styles.btico}>
//                           {" "}
//                           <BsBookmarks /> Save{" "}
//                         </button>
//                         <button className={styles.btico}>
//                           {" "}
//                           <RxCrossCircled /> Exit{" "}
//                         </button>
//                       </div>
//                     )}
//                     {rev && (
//                       <div className={styles.sec_qp}>
//                         <button className={styles.btico}> Add to Paper </button>
//                         <button className={styles.btico}> Unmark </button>
//                         <p>Select All</p>
//                         <input type="checkbox" />
//                       </div>
//                     )}
//                     {rev && (
//                       <div className={styles.qpt}>
//                         <div className={styles.qptop}>Questions</div>
//                         {!obj
//                           ? null
//                           : obj.map((qu) => (
//                               <div className={styles.parent_qnum}>
//                                 {/* <Link to={`/question_bank/${qu.key}`}> */}
//                                 <Link to={`/question_bank/${p}`}> 
//                                   <div className={styles.num_ques}>
//                                     {`Question ${p++}`}
//                                   </div>
//                                 </Link>
//                                 <input className={styles.inp} type="checkbox" />
//                               </div>
//                             ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className={styles.qpaper}>
//                   <div className="">
//                     <div className={styles.tq}>Question:</div>
//                     <p className={styles.reg}>
//                       {rev && key.id
//                         ? Question[parseInt(key.id) - 1].question
//                         : "No Result"}
//                     </p>
//                   </div>
//                   <div className="">
//                     <div className={styles.ts}> Solution: </div>
//                     <p className={styles.reg}>
//                       {rev && key.id
//                         ? Question[parseInt(key.id) - 1].solution
//                         : "No Result"}
//                     </p>
//                   </div>
//                 </div>
//                 <div class={styles.wrapper1}>
//                   <div class={styles.sidebar1}>
//                     <button className={styles.btsumm}> Show Summary </button>
//                     <button className={styles.btquestpaper} >
//                       {" "}
//                       Generate Question Paper{" "}
//                     </button>
//                     <button className={styles.btsavepaper}> Save Paper </button>
//                     {rev && (
//                       <div className={styles.quesbox}>
//                         <div className={styles.tqques}> Questions </div>
//                         {!obj
//                           ? null
//                           : obj.map((qu) => (
//                               <div className={styles.parent_qnum}>
//                                 <Link to={`/question_bank/${qu.key}`}>
//                                   <div className={styles.num_ques}>
//                                     {`Question ${k++}`}
//                                   </div>
//                                 </Link>
//                                 <input className={styles.inp} type="checkbox" />
//                               </div>
//                             ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link className={styles.arrow} to={"/"}><IoArrowBackCircleSharp size={50}/></Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Question_paper;
