import * as actions from './custom-cards.actions';

describe('Custom Cards Actions', () => {
  interface CustomCard {
    title: string;
    description?: string;
    image: string;
    video: string;
    date: string;
    tags: string[];
  }

  it('should create createCustomCard action with card data', () => {
    const mockCard: CustomCard = {
      title: 'Test Card',
      description: 'Test Description',
      image: 'test-image.jpg',
      video: 'https://www.youtube.com/watch?v=JvkX2_46gUY',
      date: new Date().toISOString(),
      tags: ['#tag'],
    };

    const action = actions.createCustomCard({ card: mockCard });

    expect(action.type).toBe('[Admin Page] Create Custom Card');
    expect(action.card).toEqual(mockCard);
  });

  it('should create deleteCustomCard action with card id', () => {
    const cardId = 1;
    const action = actions.deleteCustomCard({ cardId });

    expect(action.type).toBe('[Main Page/Custom Card] Delete Custom Card');
    expect(action.cardId).toBe(cardId);
  });
});
