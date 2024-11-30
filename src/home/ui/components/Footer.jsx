import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuthStore } from "../../../hooks";

export const Footer = () => {
  const { user } = useAuthStore();
  const [messageContent, setMessageContent] = useState('');
  const [placeholder, setPlaceholder] = useState('Mensaje');
  const [isSending, setIsSending] = useState(false);

  const onChangeMessage = ({ target }) => {
    const { value } = target;
    setMessageContent(value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (messageContent.trim() === '') return;

    setIsSending(true);
    setPlaceholder('Ha sido enviado');
    setMessageContent('');

    const mailtoLink = createMailtoLink();
    window.location.href = mailtoLink;

    setTimeout(() => {
      setPlaceholder('Mensaje');
      setIsSending(false);
    }, 2000);
  };

  const createMailtoLink = () => {
    const subject = `Sugerencia de ${user.username}`;
    const body = `Mensaje:\n${messageContent}`;
    return `mailto:a22216346@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer className="min-h-[300px] mt-20 bg-colorprimarylight text-colortertiary">
      <div className="mb-8 w-full p-5 flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5 bg-colorprimarydarklight">
        <form onSubmit={onSubmitForm} className="w-full md:max-w-[840px] flex flex-col md:flex-row justify-evenly items-center space-y-2 md:space-y-0 md:space-x-2">
          <label htmlFor="sugerencia" className="text-lg font-semibold">Sugerencias</label>
          <textarea
            className="bg-colortertiary resize-none p-2 h-36 w-full md:w-96 border-2 rounded-lg text-colorprimary"
            name="sugerencia"
            id="sugerencia"
            placeholder={placeholder}
            value={messageContent}
            onChange={onChangeMessage}
          ></textarea>
          <button disabled={isSending} type="submit" className="bg-colorsecondary text-colortertiary p-2 rounded-full h-[40px] w-[40px] flex items-center justify-center hover:bg-colorsecondarydark">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>

      <div className="w-full p-5 flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        <div>
          <ul className="text-lg font-semibold flex flex-col md:flex-row [&>li>a]:px-3 [&>li>a]:py-1 [&>li>a]:text-colortertiary space-y-2 md:space-y-0 md:space-x-5">
            <li>
              <Link to="/" className="hover:text-colorsecondarydark">Inicio</Link>
            </li>
            <li>
              <Link to="/pages/evaluaciones" className="hover:text-colorsecondarydark">Evaluaciones</Link>
            </li>
            <li>
              <Link to="/pages/evaluaciones/nuevo" className="hover:text-colorsecondarydark">Agregar Evaluación</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center md:text-left text-colortertiary">&copy; {new Date().getFullYear()} - Evaluaciones</p>
      </div>
    </footer>
  );
};