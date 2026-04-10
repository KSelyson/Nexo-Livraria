import FacisaImg from '../assets/logo_facisa.png'
import './footer.css'

function footer() {
  return (
    <div className='footer-container'>
        <div className='png-container'>
            <img src={FacisaImg} alt="Logo da UNIFACISA" className='logo-footer'/>
        </div>
        <div className='copyright-container'>
            <span>© - Nexo Livraria</span>
        </div>
        <div className='contact-container'>
            <span>Contato: (11) 1234-5678</span>
            <span>Email: contato@nexolivraria.com</span>
        </div>
    </div>
  )
}

export default footer