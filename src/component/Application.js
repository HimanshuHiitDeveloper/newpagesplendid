'use client';

 import React,{useState} from 'react'
import tdata from './tableData'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Image from 'next/image'
import mypic from './images/dots.svg'
export default function Application() {
  const [currentPage,setcurrent] = useState(1)
  const [recordPage,setrecordPage] = useState(10)
      const [user, setuser] = useState({
    appId: "",
    firName: "",
    pNumber: "",
    scName: "",
    requiPartner: "",
    staName: ""
  });
   const lastIndex = currentPage * recordPage;
  const firstPage = lastIndex - recordPage;
  const records = tdata.slice(firstPage,lastIndex)
  const npage = Math.ceil(tdata.length / recordPage)
  const numbers = [...Array(npage+1).keys()].slice(1)
    const [red,setrecod] = useState(records)
  const numberofpages = numbers.slice(Math.max(0,currentPage - 1), Math.min(npage,currentPage +4))
  if (typeof window === "object") {
    let apper = document.getElementById("apper")
  }
 const nextPage=()=>{
     if(currentPage !== lastIndex){
      setcurrent(currentPage +1)
    }
   }
   const prePage=()=>{
    if(currentPage !== firstPage){
      setcurrent(currentPage -1)
    }

   }
   const changeChan=(id)=>{
    setcurrent(id)
   }

  
   let name,value;
   const handle=(e)=>{
name = e.target.name;
    value = e.target.value;

    setuser({...user,[name]:value})
    console.log(value)
   }
   const fun1=(c)=>{
        apper.style.display ="block";
        apper.style.top = `${c.clientY}px` || "2px";
         apper.style.left = `${c.clientX}px` || "2px";

   }
      
      
   const postallData = ()=>{
    const {appId,firName,pNumber,scName,requiPartner,staName} = user;
     
 

    const sortData = red.filter((item)=>{
        console.log(item.fName)
         return firName.toLowerCase() === ''  ? item : item.fName.toLowerCase().includes(firName)



    })
    setrecod(sortData)
    console.log(sortData)

}
 
  return (
                 <section className="table_outer">
          <div className="table_section">
                <div className="table_header">
                <div className="text_header">
                <h4>Applications</h4>
                </div>
                  <button onClick={postallData} >Apply Filter</button>
                   <button  >
                   <span >
                
                   </span>
                   Filter</button>
                   <button id="add_appli" className="bg-primary">
                   <span>
                 
                   </span>
                   Add Application</button>
                 </div>
                   
                 <div className="table_body">
                    <div className="apperwindow" id="apper"> 
                 
                  <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="excelldownloadbtn"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Export XLS"
              />

                    </div>
                   <table id="table-to-xls"  onDoubleClick={ (e) => fun1(e)}>
                     <thead>
                   <th className="stick bt">Actions</th>
                <th className="bt">App ID</th>
                <th className="bt">Apply Date</th>
                <th className="bt">First Name</th>
                <th className="bt">Program</th>
                <th className="bt">School</th>
                <th className="bt">Modify Date</th>
                <th className="bt">Recruiment Partner</th>
                <th className="bt">Status</th>
                <th className="bt">Current Stage</th>
                     </thead>
                      <tr>
                <td className="stick lf bt"></td>
               
                <td className="stick bt">
                  <input type="text" className="appli_input" 
                  name="appId" 
           value={user.appId}
           onChange={handle} />
                </td>
             
                <td className="stick bt"></td>
                <td className="stick bt">
                  <input type="text" className="appli_input"
                    name="firName" 
           value={user.firName}
           onChange={handle}
                   />
                </td>

                <td className="stick bt">
                  <input type="text" className="appli_input"
                  name="pNumber" 
           value={user.pNumber}
           onChange={handle} />
                </td>
                <td className="stick bt">
                  <input type="number " className="appli_input"  name="scName" 
           value={user.scName}
           onChange={handle} />
                </td>
                <td className="stick bt">
                </td>
                <td className="stick d-flex flex-column bt">
                <input type="text" className="appli_input" name="requiPartner" value={user.requiPartner}
           onChange={handle} />
                </td>
                <td className="stick bt">
                  <input type="text" className="appli_input" name="staName" value={user.staName}
           onChange={handle} />
                </td>
                <td className="stick bt"></td>
               
              </tr>


                     {
                      records.map((data, id) => (
                        <>

                                             <tr>
                    <td className="stick bt">
                      <span className="table_menu">
                        <Image src={mypic} />
                      </span>
                    </td>
                    <td className="bt">
                      <a href={data?.app_id}>{data?.app_id}</a>
                    </td>

                    <td className="bt">{data?.join_date}</td>
                    <td className="bt">{data?.fName}</td>
                    <td className="bt">{data?.programName} </td>
                    <td className="bt">
                      {data?.sName}
                    </td>
                    <td className="bt">{data?.startDate}</td>
                    <td className="bt">
                      <a href={data?.reCId}>{data?.reCId}</a>
                    </td>
                    <td className="bt">
                      <span className={`status ${data?.status}`}>
                        {data?.status}
                      </span>
                    </td>
                    <td className="bt">
                      <span className="stage_section">{data?.stage}</span>
                    </td>
                  </tr>

                        </>

                        ))
                     }
                       
                   </table>
                  
                 </div>
                 </div>
            <div className="dashboard_nav">
          <select name="rowsData" id="rowsData" onChange={(e)=>setrecordPage(e.target.value)}>
            <option value="10">
              <a
                class="dropdown-item"
                href="#"
              >
                10
              </a>
            </option>
            <option value="20">
              <a
                class="dropdown-item"
                href="#"
              >
                20
              </a>
            </option>
            <option value="30">
              <a
                class="dropdown-item"
                href="#"
              >
                30
              </a>
            </option>
          </select>
          <ul className="dashboard_list">
            <li>
              <a href="#" onClick={prePage}>
                Prev
              </a>
            </li>
            <li className="only_five">
              {numberofpages.map((n, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`page-item ${
                      currentPage === n ? "active" : ""
                    } `}
                    onClick={() => changeChan(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </li>
            <li>
              <a href="#" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </div>

          </section>
  )
}
