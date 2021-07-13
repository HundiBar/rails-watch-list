class Bookmark < ApplicationRecord
  belongs_to :list
  belongs_to :movie

  validates :comment, presence: true, length: { minimum: 6 }
  validates :movie_id, uniqueness: { scope: :list_id, message: "A movie can't be added more than once in this list" }

  def unbookmarked
    # for each movie, check movie.bookmarks doesnt have list_id
    # as current list.id
  end
end
