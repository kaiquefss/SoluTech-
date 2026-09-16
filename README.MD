ESTRUTURA DE ARQUIVOS INICIO AO FIM:
-----------------------------------------{DOCS/SCRIPT}---------------------------------------------------------------------------------------------------------------------------------------

1 - CRIAÇÃO DE BANCO DE DADOS, 
2 - USO DE BANCO DE DADOS,
3 - CRIAÇÃO DE TABELA SEGUINDO AS REGRAS

-----------------------------------------{SRC/MODELS/USER}----------------------------------------------------------------------------------------------------------------------------

1 - DEFINIR UMA ENTIDADE E TRANSFORMA-LA NUMA CLASSE
2 - DEFINIR ATRIBUTOS DA CLASSE, CASO OS ATRIBUTOS SEJAM CREDENCIAIS COLOCAR # ANTES DA ESCRITA!
3 - DEFINIR O CONSTRUCTOR (METODO ESPECIAL), PASSAR OS PARAMETROS DOS ATRIBUTOS, E INSTANCIAR ELES USANDO O THIS.
4 - UTILIZAR O GET PARA ACESSAR A INSTANCIA PRIVADA DO #
5 - UTILIZAR O SET RETORNAR UM VALOR A INSTANCIA
6 - FINALIZAR COM EXPORT DEFAULT (NOME DA CLASSE)

----------------------------------------{SRC/CONFIGS/DATABASE}--------------------------------------------------------------------------------------------------------------------------

1 - IMPORTAR BIBLIOTECA DO BANCO DE DADOS, E DOTENV (ESCONDER VARIAVEIS DE AMBIENTE)
2 - DECLARAR VARIAVEL POOL ( PARA FAZER A CONEXÃO DO BANCO DE DADOS COM O BACKEND )
3 - ATRIBUIR A VARIAVEL POOL A BIBLIOTECA DA DB E PUXAR UM METODO CREATEPOOL ({})
4 - CRIAR UM ARQUIVO .ENV NA RAIZ DO PROJETO (PARA INFORMAR AS VARIAVEIS DE AMBIENTE)

EXEMPLO PRATICO:

DB_HOST = 
DB_USER = 
DB_PASSWORD =
DB_PORT = 
DB_DATABASE = 

SERVER_PORT = 

5 - NO CORPO DO METODO CREATEPOOL, INFORMAÇÕES DO .ENV, EXEMPLO: 
    
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true, ( QUANDO O LIMITE DE CONEXÕES ESTOURA, ELE AGE ATIVANDO A QUEUELIMIT )
    connectionLimit: 10, ( SERVE PARA ESTABELECER UM LIMITE DE CONEXÕES SIMULTANEAS )
    queueLimit: 0 ( INICIA UMA FILA )

5 - export default pool 

---------------------------------------{SRC/REPOSITORIES/userRepository}-----------------------------------------------------------------------------------------------------------

1 - IMPORTAR A POOL DA DATABASE
2 - DECLARAR UMA FUNÇÃO PARA O REPOSITORIO ( VAI INICIALIZAR OS COMANDOS SQL )
EXEMPLO PRATICO:

const userRepository = {
    selecionar: async() => {                          //(CRIA UMA FUNÇÃO ASSINCROMA PARA SELECIONAR OS USUARIOS)
        const sql = 'SELECT * FROM users;';	      //(DECLARA UMA VARIAVEL SQL PARA ATRIBUIR O COMANDO)					
        const [rows] = await pool.execute(sql);       //(DECLARA UM ARRAY PARA OBTER O PRIMEIRO ELEMENTO QUE TIVER REGISTROS REAIS RETORNADOS PELA CONSULTA DA FUNÇÃO ACIMA)
        return rows                                   //(RETORNA O ARRAY E ENCERRA A FUNÇÃO)
    },
3 - export default userReposity

---------------------------------------{SRC/SERVICE/userService}--------------------------------------------------------------------------------------------------------------------

OBJETIVO IMPLEMENTAR REGRAS DE NEGOCIOS DA SUA APLICAÇÃO

1 - IMPORTA O METODO userRepository
2 - DECLARA VARIAVEL userService 

