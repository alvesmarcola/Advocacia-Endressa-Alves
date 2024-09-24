import { DefaultButton } from '../Buttons/Buttons';
import {
  Content,
  FormContainer,
  FormRow,
  Input,
  InputContainer,
  LeadCaptureContainer,
  TextArea,
} from './style';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import emailJs from 'emailjs-com';

const leadCaptureFormValitationSchema = zod.object({
  primeiro_nome: zod.string().min(1, 'Favor preencher'),
  ultimo_nome: zod.string().min(1, 'Favor preencher'),
  email: zod.string().min(1, 'Favor preencher').email('Email inválido'),
  telefone: zod.string().min(1, 'Favor preencher'),
  caso: zod.string().min(1, 'Favor preencher'),
});

type leadCaptureFormData = zod.infer<typeof leadCaptureFormValitationSchema>;

export function LeadCapture() {
  const { register, handleSubmit, formState, reset } = useForm<leadCaptureFormData>({
    resolver: zodResolver(leadCaptureFormValitationSchema),
  });

  function sendEmail(data: leadCaptureFormData) {
    const templateParams = {
      primeiro_nome: data.primeiro_nome,
      ultimo_nome: data.ultimo_nome,
      email: data.email,
      telefone: data.telefone,
      caso: data.caso,
    };

    emailJs
      .send('service_x346wyb', 'template_dfot4m5', templateParams, 'hv6EbQTvcrUzfM1ZS')
      .then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text);
        reset(); // Limpa os campos do formulário após o envio
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
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
          <form onSubmit={handleSubmit(sendEmail)}>
            <FormRow>
              <InputContainer>
                <Input {...register('primeiro_nome')} placeholder="Primeiro nome" />
                <p>{formState.errors.primeiro_nome?.message}</p>
              </InputContainer>

              <InputContainer>
                <Input {...register('ultimo_nome')} placeholder="Último nome" />
                <p>{formState.errors.ultimo_nome?.message}</p>
              </InputContainer>
            </FormRow>

            <FormRow>
              <InputContainer>
                <Input {...register('email')} placeholder="E-mail" />
                <p>{formState.errors.email?.message}</p>
              </InputContainer>

              <InputContainer>
                <Input {...register('telefone')} placeholder="Número de telefone" />
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

            <DefaultButton type="submit">Enviar consulta gratuita</DefaultButton>
          </form>
        </FormContainer>
      </Content>
    </LeadCaptureContainer>
  );
}
