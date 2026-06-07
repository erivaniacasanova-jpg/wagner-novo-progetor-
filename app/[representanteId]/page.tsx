import RegistrationForm from "@/components/registration-form"

export default async function RepresentantePage({ params }: { params: Promise<{ representanteId: string }> }) {
  const { representanteId } = await params

  const representantes = {
    "134684": {
      id: "134684",
      nome: "William Dos Santos Pessoa",
      whatsapp: "5521969400194",
    },
    "135302": {
      id: "135302",
      nome: "Antonia Erivania Delmiro Jacinto",
      whatsapp: "558498410187",
    },
    "153542": {
      id: "153542",
      nome: "Aline Aparecida Melo",
      whatsapp: "553193371195",
    },
    "88389": {
      id: "88389",
      nome: "Wagner Cruz Vieira",
      whatsapp: "5521996098857",
    },
    "108054": {
      id: "108054",
      nome: " Layanna Kristina Chagas Araujo Faustino",
      whatsapp: "5584986843611",
    },
    "163994": {
      id: "163994",
      nome: " Carlos Martins",
      whatsapp: "5521986428223",
    },
     "140894": {
      id: "140894",
      nome: "  Francisco Martins Ferreira",
      whatsapp: "5584981317641",
    },
    "159726": {
      id: "159726",
      nome: " Jordeides Silva Pereira",
      whatsapp: "556993397859",
      },
    "160064": {
      id: "160064",
      nome: " Richard Feijo Da Silva",
      whatsapp: "556993397859",
    },
     "119294": {
      id: "119294",
      nome: " Narcisio Marques Da Silva",
      whatsapp: "5511974805837",
    },
  }

  const representante = representantes[representanteId as keyof typeof representantes]

  if (!representante) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 md:py-12 px-2 md:px-4">
        <div className="container mx-auto max-w-4xl w-full px-3 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
            <p className="text-center text-red-600 text-xl">Representante não encontrado.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 md:py-12 px-2 md:px-4">
      <div className="container mx-auto max-w-4xl w-full px-3 sm:px-6 md:px-8">
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Relatorio</h1>
          </div>
          <RegistrationForm representante={representante} />
        </div>
      </div>
    </main>
  )
}
