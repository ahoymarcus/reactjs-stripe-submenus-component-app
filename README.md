# React-JS Stripe Submenus Components App with UseContext Hook

<br />

O projeto renderiza uma série de componentes de menu em um componente de Hero de uma página web, entre eles temos os componentes Navbar, Sidebar, Submenu, todos eles renderizados de forma condicionada dependendo da interação com o usuário.

<br />

**Em termos da funcionalidade mais avançada do app temos o sistema criado para a captura dos valores html-css dos botões de navbar e passando esses valores para o contexto global, para em seguida serem importados pelo componente Submenu, que vai condicionar a qual do butões se deve renderizar o submenu e também realizar a correta localização do submeno logo abaixo do respectivo botão de navbar que foi buscado pelo usuário com o mouse.**

<br />

#### React Project (the 15 Projects) - Freecodecamp.org

Conjunto de projetos de frontend inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento do framework React-JS e JavaScript. [^1]

<br />

[]()

<br />

### Imagem do card com Lista de Contatos:

![Imagem do card com Lista de Contatos](/public/images/)

<br />

### Imagem da funcionalidade acrescida de Aniversariantes do Dia:

![Imagem da funcionalidade acrescida de Aniversariantes do Dia](/public/images/)

<br />

### Imagem do card com Lista de Contatos:

![Imagem do card com Lista de Contatos](/public/images/)

<br />

### Imagem da funcionalidade acrescida de Aniversariantes do Dia:

![Imagem da funcionalidade acrescida de Aniversariantes do Dia](/public/images/)


<br />

Interessante notar nesse códigos criados pelo professor Smilga e que realizam o trabalho de capturar informações dos botões de Navbar:

<br />

```
import { useGlobalContext } from './context';


const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();


const displaySubmenu = (e) => {  
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);

    // recupar a pag de referência do btn
    const page = e.target.textContent;

    // calcular valor do ponto central do btn
    const center = (tempBtn.left + tempBtn.right) / 2;

    // posicionar o submenu 3px  sobre o btn
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };
```

<br />

Já aqui abaixo temos as informações recolhidas em Navbar redefinindo o contexto global dos valores do app:

<br />


```
const [ location, setLocation ] = useState({});

... outros códigos

const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    
    setIsSubmenuOpen(true);
};

return (
        <AppContext.Provider
            value={{
                ...outros valores
                location 
            }}
        >
            {children}
        </AppContext.Provider>
    );
```

<br />

Finalmente, o componente de Submenu fica responsável por renderizar o submenu de forma correta para o botão que recebeu interação do usuário e na posição correta encima do próprio botão.
Para tanto ele importa toda a referência construída anteriormente para botão correto e na posição correta, passando a renderizar o submenu de maneira condicionada e dinamica:

<br />

```
import { useGlobalContext } from './context';


const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef(null);


  useEffect(() => {
    // pegar referência do element node
    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

  }, [location]);
```


<br />
<br />

[^1] John Smilga - Freecodecamp.org.
