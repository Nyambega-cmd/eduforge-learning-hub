export const metadata={title:"Meet the Founder and Developer | EduForge"};
export default function Founder(){
  return (<main className="px-6 py-14 max-w-5xl mx-auto grid md:grid-cols-[320px_1fr] gap-10">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/founder/kevin-nyambega-mongare.jpg" alt="Kevin Nyambega Mongare" className="rounded-md w-full object-cover"/>
    <div><h1 className="text-3xl font-bold">Meet the Founder and Developer</h1>
      <h2 className="text-xl mt-4">Kevin Nyambega Mongare</h2>
      <p className="text-steel">Founder and Developer of EduForge Learning Hub</p>
      <p className="mt-4 max-w-prose">Kevin holds a Bachelor of Education Technology (Mechanical Technology) and works across education, curriculum implementation, and technical and vocational training, including welding and fabrication, with experience linked to Masinde Muliro University of Science and Technology.</p>
      <h3 className="font-semibold mt-6">Areas of expertise</h3>
      <ul className="list-disc ml-5 mt-2">{["Mechanical Technology and Mechanical Production","Welding and fabrication","Curriculum implementation","TVET training","Digital learning and educational technology"].map(x=><li key={x}>{x}</li>)}</ul>
      <p className="mt-6 text-sm text-steel">Vision, founder message and contact links: to be supplied by Kevin. None have been invented.</p>
    </div></main>);
}
