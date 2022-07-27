import * as yup from 'yup';

export const CategorySchema = yup.object({
    nombreCategoria: yup
      .string('Escriba el nombre de la categoría')
      .required('Este campo es requerido')
      .min(3,'El texto no puede ser tan corto')
      .max(200,'El texto no puede ser tan largo'),
    description: yup
      .string('Escriba una descripción')
      .required('Este campo es requerido')
      .min(3,'El texto no puede ser tan corto')
      .max(200,'El texto no puede ser tan largo')
  });
