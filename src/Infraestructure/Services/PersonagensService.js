import PersonagensRepository from "../Repositories/PersonagensRepository";

class PersonagensService {
  constructor(personagensRepository = new PersonagensRepository()) {
    this.personagensRepository = personagensRepository;
  }

  async listarPersonagens() {
    try {
      const { data } = await this.personagensRepository.listarPersonagens();
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default PersonagensService;
