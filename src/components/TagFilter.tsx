import { motion } from 'framer-motion';

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

const TagFilter = ({ tags, selectedTag, onTagSelect }: TagFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-6 py-2 rounded-full font-semibold transition-all font-sans ${
            selectedTag === tag
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
          }`}
        >
          {tag}
        </button>
      ))}
    </motion.div>
  );
};

export default TagFilter;
