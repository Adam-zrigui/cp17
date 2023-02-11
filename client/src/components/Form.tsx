import { Box, Button, Checkbox, Group, NavLink, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import axios from 'axios'
import React, { useState } from 'react'
export default function Form() {
  const [user, userset] = useState('')
  const [pass, passset] = useState('')
  const [gmail, gmailset] = useState('')
  
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
      username: '',
      password: '',
    },

    validate: {
      email: (value : any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
    <form onSubmit={form.onSubmit((values) => {
      axios.post('http://localhost:5500/post',  values).then((res) => {
        alert('user created successfully')
      })
    
    })}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
        required
      />
  <TextInput
        withAsterisk
        label="username"
        placeholder="your Username"
        required
        {...form.getInputProps('username')}
      />
      
        <PasswordInput
      withAsterisk
    
      label="password"
      placeholder="*********"
      {...form.getInputProps('password')}
/>
      <Checkbox
        mt="md"
        label="I agree to get hacked"
        required
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
    <NavLink component='a' href="/map" label='check data'/>
  </Box>
  )
}
