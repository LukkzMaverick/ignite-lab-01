import { Test, TestingModule } from '@nestjs/testing';
import { TestResolver } from './test.resolver';

describe('TestController', () => {
  let controller: TestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestResolver],
    }).compile();

    controller = module.get<TestResolver>(TestResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
