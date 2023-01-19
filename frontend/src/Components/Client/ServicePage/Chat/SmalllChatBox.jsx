/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useWebSocket from 'react-use-websocket';

function SmalllChatBox({ modal, showModal, post }) {
  const username = useSelector((state) => state.user.userDetails?.username);
  console.log(post, 'props data');
  const freelancerUsername = post.username;
  const authTokens = useSelector((state) => state.user.token.access_token);
  const [messageHistory, setMessageHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const namesAlph = [username, freelancerUsername].sort();
  const conversationName = `${namesAlph[0]}__${namesAlph[1]}`;
  const { sendJsonMessage } = useWebSocket(
    authTokens ? `ws://localhost:8000/${conversationName}/` : null,
    {
      queryParams: {
        token: authTokens,
      },
      onOpen: () => {
        console.log('Connected!');
      },
      onClose: () => {
        console.log('Disconnected!');
      },
      onMessage: (e) => {
        const data = JSON.parse(e.data);
        console.log(data.message);
        switch (data.type) {
          case 'last_50_messages':
            setMessageHistory(data.messages);
            break;
          case 'chat_message_echo':
            console.log(data);
            setMessageHistory(...messageHistory, data.message);
            break;
          default:
            console.error('unknown type');
            break;
        }
      },
    }
  );
  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }
  function formatMessageTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString().slice(0, 5);
  }
  function handleSubmit() {
    sendJsonMessage({
      type: 'chat_message',
      message,
      name,
    });
    setName('');
    setMessage('');
  }
  console.log(message, 'the older messages');
  const handleChangeL = () => {
    showModal('');
  };
  console.log(messageHistory);

  if (modal === 'showchat') {
    return (
      <div
        tabIndex={-1}
        className=" fixed flex justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-modal h-full"
      >
        <div className="shadow-2xl bg-white border  md:h-[100%] border-gray-500 relative  rounded-lg">
          <div className="relative m-4 ">
            <div className="w-80 h-96 flex flex-col border shadow-md bg-white">
              <div className="flex items-center justify-between border-b p-2">
                {/* user info */}
                <div className="flex items-center">
                  <img
                    className="rounded-full w-10 h-10"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                  <div className="pl-2">
                    <div className="font-semibold">
                      <a className="hover:underline" href="#">
                        John Doe
                      </a>
                    </div>
                    <div className="text-xs text-gray-600">Online</div>
                  </div>
                </div>
                {/* end user info */}
                {/* chat box action */}
                <div>
                  <button
                    type="button"
                    className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleChangeL}
                    className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* end chat box action */}
              </div>
              <div className="flex-1 px-4 py-4 overflow-y-auto">
                {/* chat message */}

                <ul>
                  {messageHistory.map((item) => (
                    <li className="clearfix2">
                      {item.from_user.username !== username && (
                        <div className="w-full flex justify-start">
                          <div
                            className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                            style={{ maxWidth: 300 }}
                          >
                            <span className="block">{item.content}</span>
                            <span className="block text-xs text-right">
                              {formatMessageTimestamp(item.timestamp)}
                            </span>
                          </div>
                        </div>
                      )}

                      {item.from_user.username === username && (
                        <div className="w-full flex justify-end">
                          <div
                            className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                            style={{ maxWidth: 300 }}
                          >
                            <span className="block">{item.content}</span>
                            <span className="block text-xs text-right">
                              {formatMessageTimestamp(item.timestamp)}
                            </span>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                {/* end chat message */}
              </div>
              <div className="flex items-center border-t p-2">
                {/* chat input action */}
                <div>
                  <button
                    className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* end chat input action */}
                <div className="w-full mx-2">
                  <input
                    className="w-full rounded-full border border-gray-200"
                    type="text"
                    defaultValue=""
                    placeholder="Aa"
                    name="message"
                    value={message}
                    onChange={handleChangeMessage}
                  />
                </div>
                {/* chat send action */}
                <div>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex hover:bg-indigo-50 rounded-full p-2"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
                {/* end chat send action */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmalllChatBox;
