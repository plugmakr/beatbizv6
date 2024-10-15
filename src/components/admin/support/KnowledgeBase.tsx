import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search, FolderPlus } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  lastUpdated: string;
  views: number;
}

const KnowledgeBase: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([
    { id: 1, title: 'Getting Started with BeatBiz Pro', category: 'Basics', lastUpdated: '2023-06-01', views: 1500 },
    { id: 2, title: 'How to Upload and Sell Your Beats', category: 'Selling', lastUpdated: '2023-06-05', views: 1200 },
    { id: 3, title: 'Collaborating with Other Producers', category: 'Collaboration', lastUpdated: '2023-06-10', views: 800 },
    { id: 4, title: 'Understanding Royalties and Payments', category: 'Finances', lastUpdated: '2023-06-12', views: 1000 },
    { id: 5, title: 'Advanced Mixing Techniques', category: 'Production', lastUpdated: '2023-06-15', views: 600 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddArticle = () => {
    // Implement add article functionality
    console.log('Add new article');
  };

  const handleEditArticle = (id: number) => {
    // Implement edit article functionality
    console.log('Edit article', id);
  };

  const handleDeleteArticle = (id: number) => {
    // Implement delete article functionality
    console.log('Delete article', id);
  };

  const handleAddCategory = () => {
    // Implement add category functionality
    console.log('Add new category');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Knowledge Base</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleAddArticle}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Add Article
          </button>
          <button
            onClick={handleAddCategory}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
          >
            <FolderPlus size={20} className="mr-2" />
            Add Category
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute left-3 top-2 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredArticles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">{article.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{article.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap">{article.views}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditArticle(article.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteArticle(article.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KnowledgeBase;