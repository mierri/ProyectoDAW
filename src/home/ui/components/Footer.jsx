import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export const Footer = () => {

  const [messageContent, setMessageContent] = useState('');
  const [placeholder, setPlaceholder] = useState('Mensaje');
  const [isSending, setIsSending] = useState(false);

  const onChangeMessage = ( {target} ) => {
    const { value } = target;
    setMessageContent(value);
  }

  const onSubmitForm = ( event ) => {
    event.preventDefault();
    if ( messageContent.trim() === '' ) return;
    
    setIsSending(true);
    setPlaceholder('Ha sido enviado');
    setMessageContent('');

    setTimeout(() => {
      setPlaceholder('Mensaje');
      setIsSending(false);
    }, 2000);
  
  }

  return (
    <footer className="min-h-[400px] mt-20">
      <div className="mb-8 w-full p-5 flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5 bg-slate-300">
        <form onSubmit={onSubmitForm} className="w-full md:max-w-[840px] flex flex-col md:flex-row justify-evenly items-center space-y-2 md:space-y-0 md:space-x-2">
          <label htmlFor="sugerencia" className="text-lg font-semibold">Sugerencias</label>
          <textarea
            className="bg-slate-200 resize-none p-2 h-36 w-full md:w-96 border-2 rounded-lg"
            name="sugerencia"
            id="sugerencia"
            placeholder={placeholder}
            value={messageContent}
            onChange={onChangeMessage}
          ></textarea>
          <button disabled={isSending} type="submit" className="bg-blue-500 text-white p-2 rounded-full h-[40px] w-[40px] flex items-center justify-center">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>

      <div className="w-full p-5 flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        <div>
          <ul className="text-lg font-semibold flex flex-col md:flex-row [&>li>a]:px-3 [&>li>a]:py-1 [&>li>a]:text-black space-y-2 md:space-y-0 md:space-x-5">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/pages/evaluaciones">Evaluaciones</Link>
            </li>
            <li>
              <Link to="/pages/evaluaciones/nuevo">Agregar Evaluación</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center md:text-left text-slate-500">&copy;  {new Date().getFullYear()} - Evaluaciones</p>
      </div>
    </footer>
  )
}
