import { FormControl, IconButton, Input, InputAdornment } from '@mui/material'
import { AiOutlineSearch } from 'shared/ui/icons'
import { FC } from 'react'
import { FieldValues } from 'shared/lib/helpers'

interface Props{
    values: FieldValues,
}

export const SearchInput: FC<Props> = ({ values }) => {
  return <FormControl variant="outlined" fullWidth sx={{ marginBottom: '10px' }}>
    <Input
      id="outlined-adornment-password"
      sx={{ height: 42 }}
      placeholder={'Search'}
      inputProps={{ ...values.inputProps }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end">
            <AiOutlineSearch/>
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
}
