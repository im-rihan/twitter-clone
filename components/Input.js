import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const filePickerRef = useRef(null)

  const addImagetoPost = () => {
    console.log('clicked')
  }
  return (
    <div
      className={`flex space-x-3 overflow-y-scroll border-b border-gray-700 p-3`}
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
          {selectedFile && ( //TODO: if user select file then showing
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
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                className="hidden"
                onChange={addImagetoPost}
                ref={filePickerRef}
              />
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            {showEmojis && (
              <Picker
                style={{
                  position: 'absolute',
                  marginTop: '465px',
                  marginLeft: -40,
                  maxWidth: '320px',
                  borderRadius: '20px',
                }}
                theme="dark"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
