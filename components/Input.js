import { XIcon } from '@heroicons/react/solid'
import { useState } from 'react'

function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  return (
    <div
      className={`ove flex space-x-3 overflow-y-scroll border-b border-gray-700 p-3`}
    >
      <img
        src="https://i.ibb.co/yN3BSLJ/IMG-20210315-171207.jpg"
        alt=""
        className="h-11 w-11 cursor-pointer rounded-full"
      />
      <div className="w-full divide-y divide-gray-700 ">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            className="min-h-[50px] w-full bg-transparent
                      text-lg tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none"
            placeholder="What's hapenning?"
          />
          {selectedFile && (
            <div className="relative">
              <div
                onClick={() => setSelectedFile(null)}
                className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center
              justify-center bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
              >
                <XIcon className="h-5 text-white" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="max-h-80 rounded-2xl object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Input
