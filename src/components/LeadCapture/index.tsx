import { DefaultButton } from '../Buttons/Buttons'
import {
  Content,
  FormContainer,
  FormRow,
  Input,
  InputContainer,
  LeadCaptureContainer,
  TextArea,
} from './style'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'
import emailjs from 'emailjs-com'  // Importe o EmailJS

export function LeadCapture() {
  const leadCaptureFormValitationSchema = zod.object({
    primeiro_nome: zod.string().min(1, 'Favor preencher'),
    ultimo_nome: zod.string().min(1, 'Favor preencher'),
    email: zod.string().min(1, 'Favor preencher'),
    telefone: zod.string().min(1, 'Favor preencher'),
    caso: zod.string().min(1, 'Favor preencher'),
  })

  type leadCaptureFormData = zod.infer<typeof leadCaptureFormValitationSchema>
  const [formData, setFormData] = useState<leadCaptureFormData>()

  const { register, reset, handleSubmit, formState } =
    useForm<leadCaptureFormData>({
      resolver: zodResolver(leadCaptureFormValitationSchema),
    })

  function handleCreateNewSubmit(data: leadCaptureFormData) {
    setFormData(data)

    // Substitua pelo seu userID, serviceID e templateID do EmailJS
    emailjs.send(
      'seu_serviceID',  // Service ID
      'seu_templateID', // Template ID
      {
        primeiro_nome: data.primeiro_nome,
        ultimo_nome: data.ultimo_nome,
        email: data.email,
        telefone: data.telefone,
        caso: data.caso,
      },
      'seu_userID' // User ID
    )
    .then((response) => {
      console.log('E-mail enviado com sucesso!', response.status, response.text);
      reset(); // Reseta o formulário após envio bem-sucedido
    })
    .catch((error) => {
      console.error('Erro ao enviar o e-mail:', error);
    });
  }

  return (
    <LeadCaptureContainer id="contato">
      <Content>
        <FormContainer>
          <header>
            <h2>Realize sua consulta sem custo</h2>
            <p>
              Fale um pouco sobre o seu problema jurídico, assim que nossa
              equipe avaliar, entraremos em contato!
            </p>
          </header>
          <form onSubmit={handleSubmit(handleCreateNewSubmit)} action="">
            <FormRow>
              <InputContainer>
                <Input
                  {...register('primeiro_nome')}
                  placeholder="Primeiro nome"
                />
                <p>{formState.errors.primeiro_nome?.message}</p>
              </InputContainer>

              <InputContainer>
                <Input
                  {...register('ultimo_nome')}
                  placeholder="Último nome"
                />
                <p>{formState.errors.ultimo_nome?.message}</p>
              </InputContainer>
            </FormRow>

            <FormRow>
              <InputContainer>
                <Input
                  {...register('email')}
                  placeholder="E-mail"
                />
                <p>{formState.errors.email?.message}</p>
              </InputContainer>

              <InputContainer>
                <Input
                  {...register('telefone')}
                  placeholder="Número de telefone"
                />
                <p>{formState.errors.telefone?.message}</p>
              </InputContainer>
            </FormRow>

            <InputContainer>
              <TextArea
                {...register('caso')}
                cols={25}
                rows={10}
                placeholder="Conte um pouco sobre o seu caso..."
              />
              <p>{formState.errors.caso?.message}</p>
            </InputContainer>

            <DefaultButton type="submit">
              Enviar consulta gratuita
            </DefaultButton>
          </form>
        </FormContainer>
      </Content>
    </LeadCaptureContainer>
  )
}
