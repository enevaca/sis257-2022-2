import { Test, TestingModule } from '@nestjs/testing';
import { InterpreteService } from './interprete.service';

describe('InterpreteService', () => {
  let service: InterpreteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterpreteService],
    }).compile();

    service = module.get<InterpreteService>(InterpreteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
