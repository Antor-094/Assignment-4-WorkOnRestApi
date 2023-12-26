import mongoose, { Schema } from 'mongoose';
import { Tuser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<Tuser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
    },
    {
        timestamps: true,
    },
);


userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
    } 
    next();
})

const User = mongoose.model<Tuser>('User', userSchema);

export default User;
