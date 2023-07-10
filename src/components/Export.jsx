import { useState } from 'react';
import ArrowIcon from '../icons/arrow-icon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function Export () {
    // const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [loader, setLoader] = useState(false);


    // const handleOpen = () => setIsOpen(prev => !prev);

    const downloadPDF = () => {
            const capture = document.querySelector('.summary_box');
            setLoader(true);
            html2canvas(capture).then((canvas) => {
                const imgData = canvas.toDataURL('img/png');
                const doc = new jsPDF('p', 'mm', 'a4');
                const componentWidth = doc.internal.pageSize.getWidth();
                const componentHeight = doc.internal.pageSize.getHeight();
                doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
                setLoader(false);
                doc.save('summary.pdf');
            })
        }
    
  

  return (
    <div>
        <button onClick={downloadPDF} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Export
            <ArrowIcon />
        </button>
        {/* {isOpen &&
        <ul className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer font-satoshi font-normal">
            <li className='block px-4 py-2 text-sm' onClick="">Word</li>
            <hr />
            <li className='block px-4 py-2 text-sm'  onClick={downloadPDF} >Pdf</li>
        </ul>
        } */}
    </div>
    )
}

export default Export