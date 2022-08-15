import {Form, Input, Button} from 'antd'


const Login = () => {
    const handleForm = ({ email, password }) => {
        alert( 'form submitted w/' + email + ' and ' + password)

    }
    return ( 
    <>
        <h2>Login</h2>
        <Form onFinish={ handleForm } labelCol={{ span: 8 }} wrapperCol={{ span: 16}}>
            <Form.Item label='Email' name='email' rules={[{
                required: true,
                message: 'Please enter a valid email'
            }]}>
                <Form.Item label='Email' name='email' rules={[{
                required: true,
                message: 'Please enter a valid email'
            }]}>
                <Input></Input>
            </Form.Item>
                <Input/>
            </Form.Item>
            <Button type="primary" htmlType='submit'>Submit</Button>
        </Form>
    </>
    );
}
 
export default Login;