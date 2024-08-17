import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()
    console.log(data.state.user)

    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header username={data.state.user}/>
        {/*Card*/}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"25 C"} subtitle={"Tirunelveli"} />
          <Card bgcolor={"#FD6663"} title={"August"} subtitle={"12:23:20"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        {/*Todo Container*/}
        <TodoContainer/>
      </div>

    </div>
    )
}

export default Landing 