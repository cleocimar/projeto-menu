import {ModelBase} from './model-bases';

export class Aula extends ModelBase {
  instituicao: string;
  data_aula: Date;
  disciplina: string;
  conteudo: Text;
}