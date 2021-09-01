import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../FormFields';
import JalaliDatePicker from '../../FormFields/JalaliDatePicker';
import { getTypeOfDamages } from '../../../services/formService';


export default function IncidentDetails(props) {
    const [typeOfDamages, setTypeOfDamages] = useState([])
    useEffect(() => {
        const reciveTypeOfDamages = async () => {
            const response = await getTypeOfDamages()
            if (response)
            {
                let arr = []
                response.forEach((item) => {
                    let obj ={}
                    obj.value = item.id
                    obj.label = item.title
                    arr.push(obj)
                })
                setTypeOfDamages(arr)
            }
        }
        reciveTypeOfDamages()
    }, [])

    const {
        formField: {
            cost,
            date,
            description,
            time,
            typeOfDamage,
        }
    } = props;

    return (
        <React.Fragment>
            <Box mb={3}>
                <Typography component="p">
                    تاریخ و ساعت وقوع حادثه را وارد نمایید
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <JalaliDatePicker name={date.name} label={date.label} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputField
                        name={time.name}
                        label={time.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectField
                        name={typeOfDamage.name}
                        label={typeOfDamage.label}
                        data={typeOfDamages}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <InputField
                        name={description.name}
                        label={description.label}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <InputField
                        name={cost.name}
                        label={cost.label}
                        fullWidth
                        cost
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
