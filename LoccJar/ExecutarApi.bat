@echo off
REM Defina a variável para o nome do JAR
set JAR_NAME=ApiLoccitane-0.0.1-SNAPSHOT.jar

REM Verifique se o arquivo JAR existe
if exist %JAR_NAME% (
    echo Iniciando a aplicacao...
    java -jar %JAR_NAME%
) else (
    echo O arquivo JAR nao foi encontrado! Certifique-se de que o arquivo JAR esta na mesma pasta que este script.
    pause
)

REM Manter a janela aberta para permitir a interrupção com Ctrl+C
pause
