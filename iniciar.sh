#!/usr/bin/env bash
# Script com detecção automática de porta livre

find_free_port() {
  local port=${1:-8090}
  while ss -tulpn 2>/dev/null | grep -q ":$port "; do
    ((port++))
  done
  echo "$port"
}

PORT=$(find_free_port 8090)

echo "🚀 Iniciando Fábio Nunes Consultor TI - Hotsite..."
echo "🌐 Acesse: http://localhost:$PORT"
echo "Para encerrar, pressione Ctrl + C"

# Abre o navegador padrão automaticamente
if command -v xdg-open > /dev/null; then
  (sleep 1 && xdg-open "http://localhost:$PORT") &
elif command -v open > /dev/null; then
  (sleep 1 && open "http://localhost:$PORT") &
fi

# Inicia o servidor HTTP
python3 -m http.server "$PORT"
