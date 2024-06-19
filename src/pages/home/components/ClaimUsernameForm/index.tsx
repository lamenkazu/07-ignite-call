import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Form } from './styles'

export default function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
