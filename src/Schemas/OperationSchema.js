import * as yup from 'yup';

export const OperationsSchema = yup.object({
    cantidad: yup
      .string('Escriba el monto del ingreso')
      .required('Este campo es requerido')
      .matches(/^[+-]?\d*(?:[.]\d*)?$/,'El valor ingresado no es un numero valido'),
    tipo: yup
      .string('Seleccione un tipo de operación')
      .required('Este campo es requerido'),
    categoria: yup
      .string('Seleccione una categoría')
      .required('Por favor seleccione una opción'),
    account: yup
      .string('Seleccione la cuenta a la que pertenece esta operación')
      .required('Por favor seleccione una opción'),
    fecha: yup
      .string('Seleccione la fecha de esta operación')
      .required('Por favor seleccione una fecha'),
    fecha: yup
      .string('Seleccione la hora de esta operación')
      .required('Por favor seleccione una hora'),
    descripcion: yup
      .string('Escriba una descripcion')
      .required('Este campo es requerido')
      .min(3,'El texto no puede ser tan corto')
      .max(200,'El texto no puede ser tan largo')
  });
