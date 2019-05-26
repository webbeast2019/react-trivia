export interface IQuestion {
  id: string,
  text: string
  options: Array<string>
  correctIndex: number
}