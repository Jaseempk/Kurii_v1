import assert from "assert";
import { 
  TestHelpers,
  KuriCoreFactory_CurrencyRemoved
} from "generated";
const { MockDb, KuriCoreFactory } = TestHelpers;

describe("KuriCoreFactory contract CurrencyRemoved event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KuriCoreFactory contract CurrencyRemoved event
  const event = KuriCoreFactory.CurrencyRemoved.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("KuriCoreFactory_CurrencyRemoved is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await KuriCoreFactory.CurrencyRemoved.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualKuriCoreFactoryCurrencyRemoved = mockDbUpdated.entities.KuriCoreFactory_CurrencyRemoved.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedKuriCoreFactoryCurrencyRemoved: KuriCoreFactory_CurrencyRemoved = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      caller: event.params.caller,
      currencyRemoved: event.params.currencyRemoved,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualKuriCoreFactoryCurrencyRemoved, expectedKuriCoreFactoryCurrencyRemoved, "Actual KuriCoreFactoryCurrencyRemoved should be the same as the expectedKuriCoreFactoryCurrencyRemoved");
  });
});
