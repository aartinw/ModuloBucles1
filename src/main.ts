type Especialidad = "Medico de familia" | "Pediatria" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatria",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatria",
    edad: 11,
  },
];

//Apartado 1 - a) //
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesDePediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatria") {
      pacientesDePediatria.push(pacientes[i]);
    }
  }
  return pacientesDePediatria;
};

const pacientesDePediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesDePediatria);

//Apartado 1 - b) //
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesDePediatriayMenorde10anios: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatria" && pacientes[i].edad < 10) {
      pacientesDePediatriayMenorde10anios.push(pacientes[i]);
    }
  }
  return pacientesDePediatriayMenorde10anios;
};

const pacientesDePediatriayMenorde10anios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesDePediatriayMenorde10anios);

//Apartado 2) //
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
    }
  }
  return activarProtocolo;
};

const protocoloOn = activarProtocoloUrgencia(pacientes);
console.log(protocoloOn);

//(Apartado 3)//
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados: Pacientes[] = [];
  const pacientesCopia = [...pacientes];

  for (let i = 0; i < pacientesCopia.length; i++) {
    if (pacientesCopia[i].especialidad === "Pediatria") {
      pacientesCopia[i] = {
        ...pacientesCopia[i],
        especialidad: "Medico de familia",
      };
      pacientesReasignados.push(pacientesCopia[i]);
    }
  }
  return pacientesReasignados;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignados);

//Apartado 4//

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let necesitanAlPediatra = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatria") {
      necesitanAlPediatra = true;
    }
  }
  return necesitanAlPediatra;
};

const pediatraACasa = HayPacientesDePediatria(pacientes);
console.log(pediatraACasa);

//Apartado 5//
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const suma: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      suma.medicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      suma.cardiologia++;
    } else if (pacientes[i].especialidad === "Pediatria") {
      suma.pediatria++;
    }
  }
  return suma;
};

const sumaDePacientes = cuentaPacientesPorEspecialidad(pacientes);
console.log(sumaDePacientes);
