import "./globals.css"
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <center><h1 style={{color:"blue"}} > Countries List</h1> </center>
      <h2><i style={{color:"brown"}}>Click on any country button to show its data</i></h2>
      <ul className="d-flex">
            <li className="cust_button"style={{color:"blue"}}><Link className="" href="./Country/pakistan"><b style={{color:"indigo"}}>Pakistan</b></Link></li>
            <li className="cust_button"style={{color:"blue"}}><Link className="" href="./Country/india"><b style={{color:"indigo"}}>India</b></Link></li>
            <li className="cust_button"style={{color:"blue"}}><Link className="" href="./Country/Japan"><b style={{color:"indigo"}}>Japan</b></Link></li>
            <li className="cust_button"style={{color:"blue"}}><Link className="" href="./Country/Turky"><b style={{color:"indigo"}}>Turky</b></Link></li>
            {/* <Link href="">Pakistan</Link> */}
        </ul>
    </div>
  );
}

