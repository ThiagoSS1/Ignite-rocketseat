import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}