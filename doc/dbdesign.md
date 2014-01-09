数据库设计
===

#### 财务分析表(数据库表名 financial_analysis 未完) 

字段 | 对应表 | 对应字段 | 含义 | _问题?_
--- | --- | --- | --- | ---
shareholder_capital_total | FS_Combas | A003100000 | 股东资本合计 | #1
minor_shareholder_right_total | FS_Combas | A003200000 | 少数股东权益合计 | #2
long_term_loan_total | FS_Combas | A002201000 | 长期借款合计 |    
bond_shall_pay | FS_Combas | A002203000 | 应付债券 |   
short_term_load_total | FS_Combas | A002101000 | 短期借款合计 |   
transactional_financial_liability | FS_Combas | A002105000 | 交易性金融负债 |   
non_current_liabilities_due_within_one_year | FS_Combas | A002125000 | 一年内到期的非流动负债 |   
current_liabilities_total | FS_Combas | A002100000 | 流动负债合计 |   
current_liabilities_other | FS_Combas | A002126000 | 其他流动负债 |   
non_current_liabilities_total | FS_Combas | A002200000 | 非流动负债合计 |     


####问题： 

1. A0003100000有两种说法？
  * 股东资本合计
  * 归属母公司所有者权益合计
2. 权益该如何翻译? 这里简单翻译成了 _right_
3. <span style="color: red"> !!! A002101000 A002105000 A002105000 A002201000 A002203000 __文档中为什么出现两次?__</span>
