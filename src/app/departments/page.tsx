import { departments } from "@/components/departments";
export default function Departments(){
  return (<main className="px-6 py-14 max-w-5xl mx-auto"><h1 className="text-3xl font-bold mb-6">Departments</h1>
    {departments.map(d=>(<section key={d.slug} id={d.slug} className="bg-white border border-steel/20 rounded-md p-5 mb-4">
      <h2 className="font-semibold text-lg">{d.name}</h2><p className="text-steel">{d.levels}</p>
      <p className="text-sm mt-2">Curriculum, resources and assessments arrive in Stages 3 to 7.</p></section>))}</main>);
}
