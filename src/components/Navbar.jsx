import React from "react";

class Navbar extends React.Component {
    
    state = {
        date: "",
        curTime: ""
    };
    

    componentDidMount(){
        this.getDate();
        this.getTime();
    }
    
    getDate = () => {
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.setState({ date });
    };

    getTime = () => {
        var today = new Date(),
        curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.setState({ curTime });
    };

    render() {
        return(
            <div className="flex justify-around mt-1  mx-auto bg-white border-double border-t-2 border-b-4 border-black shadow-2xl">
                <div className="my-auto ml-[-120px] flex space-x-2 font-noto-sans">
                    <p>現在時刻</p>
                    <p>{this.state.date}</p>
                    <p>{this.state.curTime}</p>
                </div>
                <div className="py-5 ml-[-60px]">
                    <h1 className="font-noto-sans text-red-600 text-4xl">戌時新聞</h1>
                </div>
                <div className="py-5">
              
                </div>
        </div>
        );
    }
}


export default Navbar