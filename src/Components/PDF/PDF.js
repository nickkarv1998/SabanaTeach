import jsPDF from "jspdf";
import html2canvas from "html2canvas"

const generatePDF = () =>{
    var doc = new jsPDF("l","pt","a4");
    doc.html(document.querySelector("#Certificado"), {
        callback: function(pdf){
            pdf.save("Certificado.pdf");
        }
    })
   

}



const generatePDF2 = () =>{
    console.log("SI ENTRO A LA FUNCION")
       html2canvas(document.getElementById("Certificado"), {
        onrendered: function(canvas){
            var img = canvas.toDataURL("image/png")
            var doc = new jsPDF();
            doc.addImage(img, 'JPEG', 20,20);
            doc.save("Certificado.pdf");    
            console.log("SI ENCONTRO EL ID");
        }
    })
   

}