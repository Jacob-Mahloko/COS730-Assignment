import Nav from "@/components/nav";
import Image from 'next/image'
import HOME from '../../public/home.jpg';

export default function Home() {
  return (
    <div>
      <div style={{marginTop:50,display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <Image src={HOME} alt="home" height={400} width={400} style={{borderRadius:'7px'}}/>
        <div style={{marginLeft:30,marginTop:50}}>
          <h3>What is Home Automation?</h3>
          <p style={{fontSize:14,marginTop:10}}>
          X10 home automation is an early and widely used technology for<br/> 
          automating and controlling household devices.<br/><br/>
          
          It uses power line communication to send signals over a <br/>
          home&#39s existing electrical wiring to control connected <br/>
          devices such as lights, appliances, and security systems. <br/><br/>
          
          X10 components include controllers (like remotes or wall switches) <br/>
          and receivers (like modules plugged into outlets or wired into fixtures).<br/><br/>


          While it&#39s a cost-effective and straightforward system, <br/>
          X10 can be prone to signal interference and has relatively limited<br/>
          capabilities compared to more modern home automation technologies
          </p>
        </div>
      </div>
    </div>
  );
}
