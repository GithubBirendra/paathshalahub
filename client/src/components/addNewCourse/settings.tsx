import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const Settings = () => {
  return (
  <Card>
    <CardHeader>
<CardTitle>
  Course Settings
</CardTitle>
    </CardHeader>
    <CardContent>
      <div className='flex flex-col gap-3'>
        <Label>Upload Course Image</Label>
        <Input
        type='file'
        accept='image/*'
        />

      </div>
    </CardContent>

  </Card>
  )
}

export default Settings;