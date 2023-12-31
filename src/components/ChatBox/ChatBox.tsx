import { OpenAIMessage } from "@/pages/chat";
import ChatBoxInput from "../ChatBoxInput/ChatBoxInput";


type propsType = {
  messages : OpenAIMessage[]
}


const ChatBox = ( {messages} : propsType ) => {

  const userClasses = {
    div : 'w-fill flex justify-end animate__animated animate__fadeInRight',
    p : 'font-semibold orange-bubble p-3.5 rounded-3xl w-fit max-w-md h-fit'
  }
  const assistantClasses = {
    div : 'w-fill flex justify-start animate__animated animate__fadeInLeft',
    p : 'font-semibold green-bubble p-8 overflow-y-scroll rounded-3xl w-fit max-w-2xl h-fit'
  }

  return ( 
      <div className="flex gap-10 overflow-y-scroll border-b mb-5 chat-box-width  h-4/6 flex-col  mx-10">
        {messages && messages.filter((message) => message.role != "system").map((message, idx) =>{
          return( 
            <div key={idx}  className={message.role == 'user' ? userClasses.div : assistantClasses.div}>
              <p className={message.role == 'user' ? userClasses.p : assistantClasses.p}>{message.content}</p>
            </div>
          )}
          )}
      </div>
  );
}

export default ChatBox;