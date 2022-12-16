import { Test, TestingModule } from '@nestjs/testing';
import { InterpreteController } from './interprete.controller';
import { InterpreteService } from './interprete.service';

describe('InterpreteController', () => {
  let controller: InterpreteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterpreteController],
      providers: [InterpreteService],
    }).compile();

    controller = module.get<InterpreteController>(InterpreteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
