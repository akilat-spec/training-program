function Message(a)
{
    console.log("Default Function Calling...")
}

const Msg=function(a)
{
    console.log("Nameless Function Calling...")
}

const arrowMsg=(a)=>console.log(" Function Calling...")



Message()
Msg()
arrowMsg()