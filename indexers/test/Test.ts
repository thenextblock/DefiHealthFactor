import assert from "assert";
import { 
  TestHelpers,
  AavePool_BackUnbacked
} from "generated";
const { MockDb, AavePool } = TestHelpers;

describe("AavePool contract BackUnbacked event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AavePool contract BackUnbacked event
  const event = AavePool.BackUnbacked.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AavePool_BackUnbacked is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AavePool.BackUnbacked.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAavePoolBackUnbacked = mockDbUpdated.entities.AavePool_BackUnbacked.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAavePoolBackUnbacked: AavePool_BackUnbacked = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      reserve: event.params.reserve,
      backer: event.params.backer,
      amount: event.params.amount,
      fee: event.params.fee,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAavePoolBackUnbacked, expectedAavePoolBackUnbacked, "Actual AavePoolBackUnbacked should be the same as the expectedAavePoolBackUnbacked");
  });
});
