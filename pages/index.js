import config from '../config.json';
import styled from 'styled-components';

import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/TimeLine';

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1
            }}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} />
            </div>
        </>
    )
}
  
export default HomePage

// Uma vez que o styled-components foi importado, podemos começar a criar componentes estilizados.
// Por exemplo, o StyledHeader será uma div, com tags de imagem e texto dentro dela.
// Tudo que estiver dentro desse componente, vai receber os estilos definidos para ela.

// ********************************************************************************

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header(){
    return(
        <StyledHeader>
            {/* <img src="" alt="Banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="Foto do Perfil" />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

// ********************************************************************************

function TimeLine(props){

    // Nesse componente, vamos precisar exibir o que tem dentro do objeto playlistsNames.
    // Apesar de ser um array, não podemos usar o for "normal" para exibir o conteúdo, porque 
    // o for normal é um tipo de Statement e o React não se dá muito bem com isso.
    // O React prefere o chamado "Retorno por expressão"
    // Para fazer o React exibir o conteúdo da playlist, vamos utilizar o MAP.

    // Pesquisar a diferença entre Statement e Retorno por expressão.

    const playlistNames = Object.keys(props.playlists);

    return(
        <StyledTimeline>
            {playlistNames.map( (playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>{video.title}</span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}