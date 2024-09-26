import { Body, Container, Head, Hr, Html, Img, Preview, Text } from '@react-email/components'

interface SampleEmailProps {
  userFirstname: string
}

export const SampleEmail = ({ userFirstname }: SampleEmailProps) => (
  <Html>
    <Head />
    <Preview>The sales intelligence platform that helps you uncover qualified leads.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://astro.build/assets/press/astro-logo-dark.svg`}
          width='170'
          height='50'
          alt='Novoforma Logo'
          style={logo}
        />
        <Text style={paragraph}>Estimado/a {userFirstname},</Text>
        <Text style={paragraph}>
          ¡Gracias por ponerte en contacto con Novoforma! Nos complace saber que estás interesado/a en nuestros servicios de construcción y reformas. Nuestro equipo se especializa en ofrecer soluciones personalizadas tanto para hogares como para negocios, y estamos aquí para ayudarte a transformar tus espacios.
        </Text>
        <Text style={paragraph}>
          Hemos recibido tu consulta y nos pondremos a trabajar en tu solicitud lo antes posible. En breve uno de nuestros expertos revisará los detalles de tu proyecto y se pondrá en contacto contigo para proporcionarte un presupuesto gratuito y discutir cualquier duda que puedas tener.
        </Text>
        <Text style={paragraph}>
          Si tienes alguna preferencia en cuanto a fechas para una llamada o visita, por favor háznoslo saber y lo coordinaremos.
        </Text>
        <Text style={paragraph}>
          Si tienes cualquier otra pregunta, no dudes en responder a este correo o llamarnos directamente al +34 667 757 013.
        </Text>
        <Text style={paragraph}>
          Gracias nuevamente por elegir Novoforma. Estamos entusiasmados por la oportunidad de trabajar contigo.
        </Text>

        <Text style={paragraph}>
          Saludos cordiales
          <br />
          Novoforma
          <br />
          [Correo electrónico] | +34 667 757 013 / +34 696 460 538
          <br />
          [Enlace a la web]
        </Text>
        <Hr style={hr} />
        <Text style={footer}>470 Noor Ave STE B #1148, South San Francisco, CA 94080</Text>
      </Container>
    </Body>
  </Html>
)

SampleEmail.PreviewProps = {
  userFirstname: 'Alan',
} as SampleEmailProps

export default SampleEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const logo = {
  margin: '0 auto',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const btnContainer = {
  textAlign: 'center' as const,
}

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
