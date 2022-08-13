import styled from "styled-components";

export default function Cadastro() {
  return (
    <>
      <Section>
        <h1>Criar Conta</h1>
        <Form>
          <label>
            Nome 
            <input type="text" name="name" />
          </label>
          <label>
            Email 
            <input type="email" name="email" />
          </label>
          <label>
            Senha 
            <input type="password" name="password" />
          </label>
          <button type="submit">Criar Conta</button>
        </Form>
      </Section>
    </>
  );
}

const Section = styled.section`
    display:flex;
    flex-direction: column;
    text-align: center;
    max-width: 100vw;
    min-height: 80vh;
    justify-content: center;
    align-items: center;

`;

const Form = styled.form`
    max-width: 15rem;

    input{
        margin: 1rem 0;
        padding: .4rem .4rem;
        margin-left: 10px;
        border-radius: 8px;
        border: 1px solid #333;
    }

    button{
        padding: 0.7rem 2rem;
        border-radius: 25px;
        border: unset;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all ease 0.3s;
        background-color: gray;
        color: #fff;
        font-size: 1rem;
        :hover{
            background-color: #000;
        }
    }
`;
